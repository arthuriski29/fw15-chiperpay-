const cookieConfig = {
  cookieName: "chiperpay",
  password: "Iz%sccK4kD#yO8%J6@Hz@bOEv@9A727psQ^$E",
  // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
}

export default cookieConfig