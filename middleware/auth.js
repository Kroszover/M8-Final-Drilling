import jwt from "jsonwebtoken";
import authConfig from "../config/auth.config.js";

export const verifyToken = (req, res, next) => {
  const token = req.headers["x-access-token"];

  if (!token) {
    return res.status(403).json({ message: "No se proporcionó un token" });
  }

  jwt.verify(token, authConfig.secret, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Token inválido" });
    }
    req.userId = decoded.id;
    next();
  });
};
