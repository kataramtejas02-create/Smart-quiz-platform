import express from "express";
import db from "./db.js";

const router = express.Router();

router.post("/register", (req, res) => {
  const { name, email, password, role } =
    req.body;

  const sql =
    "INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)";

  db.query(
    sql,
    [name, email, password, role],
    (err, result) => {
      if (err) {
        console.log(err);
        res.send("Error");
      } else {
        res.send("User Registered");
      }
    }
  );
});

router.post("/login", (req, res) => {
  const sql =
    "SELECT * FROM users WHERE email = ? AND password = ?";

  db.query(
    sql,
    [req.body.email, req.body.password],
    (err, result) => {
      if (err) {
        console.log(err);
        res.send("Server Error");
      } else {
        if (result.length > 0) {
          res.send(result[0]);
        } else {
          res.send("Invalid Credentials");
        }
      }
    }
  );
});

router.post("/create-quiz", (req, res) => {
  const { title, teacher_id } = req.body;

  const sql =
    "INSERT INTO quizzes (title, teacher_id) VALUES (?, ?)";

  db.query(
    sql,
    [title, teacher_id],
    (err, result) => {
      if (err) {
        console.log(err);
        res.send("Error");
      } else {
        res.send("Quiz Created");
      }
    }
  );
});

router.post("/add-question", (req, res) => {
  const {
    quiz_id,
    question_text,
    options,
    correctAnswer
  } = req.body;

  const questionSql =
    "INSERT INTO questions (quiz_id, question_text) VALUES (?, ?)";

  db.query(
    questionSql,
    [quiz_id, question_text],
    (err, result) => {
      if (err) {
        console.log(err);
        return res.send("Error inserting question");
      }

      const question_id = result.insertId;

      options.forEach((option) => {
        const optionSql =
          "INSERT INTO options (question_id, option_text, is_correct) VALUES (?, ?, ?)";

        db.query(
          optionSql,
          [
            question_id,
            option,
            option === correctAnswer
          ],
          (err) => {
            if (err) {
              console.log(err);
            }
          }
        );
      });

      res.send("Question Added");
    }
  );
});

router.get("/quiz/latest", (req, res) => {
  const quizSql =
    "SELECT * FROM quizzes ORDER BY quiz_id DESC LIMIT 1";

  db.query(quizSql, (err, quizResult) => {
    if (err) {
      console.log(err);
      return res.send("Error");
    }

    if (quizResult.length === 0) {
      return res.send([]);
    }

    const latestQuizId =
      quizResult[0].quiz_id;

    const sql = `
      SELECT 
        questions.question_id,
        questions.question_text,
        options.option_id,
        options.option_text
      FROM questions
      JOIN options
      ON questions.question_id = options.question_id
      WHERE questions.quiz_id = ?
    `;

    db.query(
      sql,
      [latestQuizId],
      (err, result) => {
        if (err) {
          console.log(err);
          res.send("Error");
        } else {
          res.send(result);
        }
      }
    );
  });
});

router.post("/submit-quiz", (req, res) => {
  const { student_id, quiz_id, answers } =
    req.body;

  let score = 0;

  answers.forEach((answer) => {
    const sql =
      "SELECT * FROM options WHERE option_id = ?";

    db.query(
      sql,
      [answer.selected_option],
      (err, result) => {
        if (result[0].is_correct) {
          score++;
        }
      }
    );
  });

  setTimeout(() => {
    const insertSql =
      "INSERT INTO attempts (student_id, quiz_id, score) VALUES (?, ?, ?)";

    db.query(
      insertSql,
      [student_id, quiz_id, score],
      (err) => {
        if (err) {
          console.log(err);
          res.send("Error");
        } else {
          res.send({ score });
        }
      }
    );
  }, 500);
});

router.get("/leaderboard", (req, res) => {
  const sql = `
    SELECT users.name, attempts.score
    FROM attempts
    JOIN users
    ON attempts.student_id = users.user_id
    ORDER BY attempts.score DESC
  `;

  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      res.send("Error");
    } else {
      res.send(result);
    }
  });
});

export default router;