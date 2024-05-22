-- CreateTable
CREATE TABLE `destinos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(255) NOT NULL,
    `valor` DECIMAL(10, 2) NULL,
    `data` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `pontos_turisticos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(255) NOT NULL,
    `endereco` VARCHAR(255) NOT NULL,
    `telefone` VARCHAR(20) NULL,
    `valor` DECIMAL(10, 2) NULL DEFAULT 0,
    `id_destino` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `hoteis` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(255) NOT NULL,
    `valor` DECIMAL(10, 2) NOT NULL,
    `avaliacao` VARCHAR(191) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `site` VARCHAR(255) NULL,
    `id_destino` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `telefones` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `telefone` VARCHAR(30) NOT NULL,
    `id_hotel` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `pontos_turisticos` ADD CONSTRAINT `pontos_turisticos_id_destino_fkey` FOREIGN KEY (`id_destino`) REFERENCES `destinos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `hoteis` ADD CONSTRAINT `hoteis_id_destino_fkey` FOREIGN KEY (`id_destino`) REFERENCES `destinos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `telefones` ADD CONSTRAINT `telefones_id_hotel_fkey` FOREIGN KEY (`id_hotel`) REFERENCES `hoteis`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
