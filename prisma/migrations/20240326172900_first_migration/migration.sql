-- CreateTable
CREATE TABLE "exercises" (
    "exercise_id" INTEGER NOT NULL,
    "name" VARCHAR(100),
    "body_part" VARCHAR(100),
    "equipment" VARCHAR(100),
    "gif_url" VARCHAR(255),
    "target" VARCHAR(100),
    "secondary_muscles" TEXT[],
    "instructions" TEXT[],

    CONSTRAINT "exercises_pkey" PRIMARY KEY ("exercise_id")
);

-- CreateTable
CREATE TABLE "routines" (
    "routine_id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "description" TEXT,
    "user_id" INTEGER,
    "routinetype_id" INTEGER,

    CONSTRAINT "routines_pkey" PRIMARY KEY ("routine_id")
);

-- CreateTable
CREATE TABLE "routinetypes" (
    "routinetype_id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" TEXT,
    "icon_url" TEXT,
    "icon_alt_text" TEXT,

    CONSTRAINT "systems_pkey" PRIMARY KEY ("routinetype_id")
);

-- CreateTable
CREATE TABLE "sessionexercise" (
    "sessionexercise_id" SERIAL NOT NULL,
    "name" VARCHAR(100),
    "sets" INTEGER,
    "reps" INTEGER,
    "weight" INTEGER,
    "rir" INTEGER,
    "session_id" INTEGER,
    "exercise_id" INTEGER,

    CONSTRAINT "sessionexercise_pkey" PRIMARY KEY ("sessionexercise_id")
);

-- CreateTable
CREATE TABLE "sessions" (
    "session_id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "description" TEXT,
    "week_id" INTEGER,

    CONSTRAINT "sessions_pkey" PRIMARY KEY ("session_id")
);

-- CreateTable
CREATE TABLE "accounts" (
    "account_id" TEXT NOT NULL,
    "user_id" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,

    CONSTRAINT "accounts_pkey" PRIMARY KEY ("account_id")
);

-- CreateTable
CREATE TABLE "authsessions" (
    "authsession_id" TEXT NOT NULL,
    "authsessionToken" TEXT NOT NULL,
    "user_id" INTEGER NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "authsessions_pkey" PRIMARY KEY ("authsession_id")
);

-- CreateTable
CREATE TABLE "users" (
    "user_id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "email" TEXT NOT NULL,
    "emailVerified" TIMESTAMP(3),
    "password" VARCHAR(255) NOT NULL,
    "activeroutine_id" INTEGER,

    CONSTRAINT "users_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "weeks" (
    "week_id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "description" TEXT,
    "routine_id" INTEGER,

    CONSTRAINT "weeks_pkey" PRIMARY KEY ("week_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "accounts_provider_providerAccountId_key" ON "accounts"("provider", "providerAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "authsessions_authsessionToken_key" ON "authsessions"("authsessionToken");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "routines" ADD CONSTRAINT "routines_routinetype_id_fkey" FOREIGN KEY ("routinetype_id") REFERENCES "routinetypes"("routinetype_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "routines" ADD CONSTRAINT "routines_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "sessionexercise" ADD CONSTRAINT "sessionexercise_exercise_id_fkey" FOREIGN KEY ("exercise_id") REFERENCES "exercises"("exercise_id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "sessionexercise" ADD CONSTRAINT "sessionexercise_session_id_fkey" FOREIGN KEY ("session_id") REFERENCES "sessions"("session_id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "sessions" ADD CONSTRAINT "sessions_week_id_fkey" FOREIGN KEY ("week_id") REFERENCES "weeks"("week_id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "accounts" ADD CONSTRAINT "accounts_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "authsessions" ADD CONSTRAINT "authsessions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_activeroutine_id_fkey" FOREIGN KEY ("activeroutine_id") REFERENCES "routines"("routine_id") ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "weeks" ADD CONSTRAINT "weeks_routine_id_fkey" FOREIGN KEY ("routine_id") REFERENCES "routines"("routine_id") ON DELETE CASCADE ON UPDATE NO ACTION;
