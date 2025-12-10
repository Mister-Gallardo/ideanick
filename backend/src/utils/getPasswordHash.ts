import bcrypt from 'bcryptjs'

const getPasswordHash = async (password: string) => {
  return await bcrypt.hash(password, 12)
}

export default getPasswordHash
