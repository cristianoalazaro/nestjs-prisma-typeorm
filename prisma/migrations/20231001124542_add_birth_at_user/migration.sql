-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(63) NOT NULL,
    `email` VARCHAR(127) NOT NULL,
    `password` VARCHAR(127) NOT NULL,
    `birthAt` DATE NOT NULL,
    `createdAt` TIMESTAMP(0) NULL DEFAULT (now()),
    `updatedAt` TIMESTAMP(0) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
