const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

// No authController.js
exports.register = async (req, res) => {
  const { username, email, password } = req.body;
  console.log("Recebendo dados de cadastro:", { username, email, password }); // Verifique os dados recebidos

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email já cadastrado!' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new User({
      username,
      email,
      password: hashedPassword,
    });

    await user.save();
    res.status(201).json({ message: 'Usuário registrado com sucesso!' });
  } catch (error) {
    console.error("Erro no cadastro:", error); // Imprima o erro no log
    res.status(500).json({ message: 'Erro ao registrar o usuário' });
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ error: 'Usuário não encontrado' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: 'Senha incorreta' });

    const secretKey = process.env.JWT_SECRET || 'fallback-secret-key';
    const token = jwt.sign({ id: user.id }, secretKey, { expiresIn: '1h' });

    res.status(200).json({ message: 'Login realizado', token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao fazer login' });
  }
};

