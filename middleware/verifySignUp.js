import User from "../models/user.model.js";

export const checkDuplicateEmail = async (req, res, next) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ where: { email } });

    if (user) {
      return res
        .status(400)
        .json({ message: "El correo electrónico ya está en uso" });
    }
    next();
  } catch (error) {
    return res.status(500).json({ message: "Error interno del servidor" });
  }
};
