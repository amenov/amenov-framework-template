const jwt = require('jsonwebtoken')

const { User } = require('models')

module.exports = async (req, res, next) => {
  const { authorization } = req.headers

  if (!authorization) {
    return res
      .status(400)
      .json({ errors: { accessToken: 'Token is required' } })
  }

  try {
    const { userId } = jwt.verify(authorization, process.env.JWT_SECRET_KEY)

    const user = await User.findOne({
      where: { id: userId },
      attributes: { exclude: 'password' }
    })

    if (!user) {
      return res.status(404).json({ errors: { user: 'User not found' } })
    }

    req.me = user

    return next()
  } catch (error) {
    console.log(error)

    return res.status(401).json({ errors: { accessToken: 'Invalid token' } })
  }
}
