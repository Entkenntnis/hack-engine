module.exports = {
  database: {
    dialect: 'sqlite',
    storage: './.data/db.sqlite',
  },
  sync: {
    //force: true,
    //alter: true,
  },
  logdb: false,
  port: 3000,
  sessionSecret: 'keyboard cat',
  sessionMaxAge: 1000 * 60 * 60 * 24, // 24 hours
  locale: 'en',
  reloadChallenges: true,
  accounts: {
    minUsername: 3,
    maxUsername: 40,
    minPw: 4,
    maxPw: 100,
    regex: /^[ -~äöüÄÖÜß]+$/,
    maxRatePerHour: 500,
    roomRegex: /^[a-zA-Z0-9]+$/,
    minRoom: 3,
    maxRoom: 20,
    maxRoomPerHour: 50,
    highscoreLimit: 2000,
    topHackersLimit: 10,
    solveRateLimit: 20,
    solveRateTimeout: 30,
  },
  i18n: {
    title: 'hack-engine',
    slogan: 'An homage to hacker.org',
    login: {
      title: 'Login',
      name: 'Name:',
      password: 'Password:',
      go: 'Go',
      invalid: 'Login failed',
    },
    invite: 'New here? Create a free account and start hacking:',
    registerLink: 'Register',
    joinRoom: 'Join room',
    hackerOfTheMonth: 'Top Hackers of the Month',
    showHighscore: 'Complete Highscore',
    inviteOrga: 'Are you hosting an event? Here you can ',
    createRoom: 'create a custom room',
    contactLink: 'Contact',
    privacyLink: 'Privacy Policy',
    github: 'GitHub',
    back: 'Back',
    register: {
      title: 'Register',
      username: 'Username',
      password: 'Password',
      repeatPassword: 'Repeat password',
      usernameNote: 'Min. 3 characters',
      passwordNote: 'Min. 4 characters',
      noteOn: 'Note on',
      dataProtection: 'data privacy',
      back: 'Back',
      go: 'Go',
      nameTooShort: 'Username too short.',
      nameTooLong: 'Username too long, max. 40 characters.',
      nameInvalidChars: 'Username contains invalid characters.',
      pwTooShort: 'Password too short.',
      pwTooLong: 'Long passwords are good. But this??',
      pwMismatch: "Passwords don't match.",
      invalidToken: 'Form invalid. Please try again.',
      failure: 'Creating user failed. Please try again.',
      nameExists: 'Username already exists.',
      serverCrowded:
        'There are too many registrations at the moment. Please try again in 15 minutes.',
    },
    join: {
      title: 'Join Room',
      key: 'Room Key:',
      back: 'Back',
      go: 'Go',
      roomNotFound: 'Room not found!',
    },
    create: {
      yourRooms: 'Your Rooms',
      title: 'Create Room',
      key: 'New room key:',
      back: 'Back',
      go: 'Create',
      information:
        'You can use a room to create a local highscore for your event and use the session system. A hacking session lasts 30 minutes, in this time user can solve challenges and gain points. After 30 minutes, the score is submitted to the local highscore. After the session, users can continue to work on the challenges as regular users.',
      keyInvalid: 'Only alphanumeric characters allowed in room key.',
      keyTooShort: 'Room key to short.',
      keyTooLong: 'Room key to long.',
      keyExists: 'Room key already exists.',
      failure: 'Creating room failed. Please try again.',
      keyNote: '3 - 20 characters, alpha-numeric',
      serverCrowded:
        'There are too many room creations at the moment. Please try again in 15 minutes.',
      invalidToken: 'Form invalid. Please try again.',
    },
    success: {
      title: 'Registration successful',
      message: 'Your registration was successful.',
      login: 'Login',
    },
    highscore: {
      title: 'Highscore',
      empty: 'There are no hackers in the highscore yet. Become the first!',
      rank: 'Rank',
      name: 'Username',
      score: 'Score',
      lastActive: 'last active',
    },
    contact: {
      title: 'Contact',
      HTML:
        '<p>Please provide contact information according to the legislation of your country.</p>',
    },
    privacy: {
      title: 'Privacy Policy',
      HTML:
        '<p>Please provide legal information according to the legislation of your country.</p>',
    },
    status: {
      name: 'Name:',
      score: 'Score:',
      sessionReady: 'session: ready',
      highscore: 'Highscore',
      profile: 'Profile',
      logout: 'Logout',
    },
    map: {
      background: 'Background:',
    },
    challenge: {
      back: 'back',
      go: 'Go',
      solvedBy: 'solved by',
      users: 'people',
      user: 'person',
      continue: 'continue',
      correct: 'is correct',
      wrong: 'is wrong',
      locked: 'After 20 tries, you must pause for 30 seconds. Please wait',
    },
  },
}
