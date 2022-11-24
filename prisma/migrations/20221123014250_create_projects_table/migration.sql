-- CreateTable
CREATE TABLE "projects" (
    "id" BIGSERIAL NOT NULL,
    "name" VARCHAR(200) NOT NULL,
    "slug" VARCHAR(50) NOT NULL,
    "description" VARCHAR(255),
    "stack" VARCHAR(50)[],
    "cover_image" VARCHAR(2000) NOT NULL,

    CONSTRAINT "projects_pkey" PRIMARY KEY ("id")
);
