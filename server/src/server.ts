import app from "./app";
import { pool } from "./config/db";

pool.connect()
  .then(() => console.log("DB Connected"))
  .catch(err => console.error("DB Error:", err));

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});