import bcrypt from 'bcryptjs'

const checkPasswordHash = async (password: string, hashed: string) => {
  return await bcrypt.compare(password, hashed)
}

export default checkPasswordHash
