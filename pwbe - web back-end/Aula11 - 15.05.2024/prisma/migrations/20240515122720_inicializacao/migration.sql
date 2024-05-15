-- CreateTable
CREATE TABLE `Clientes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(255) NOT NULL,
    `cpf` VARCHAR(20) NOT NULL,
    `email` VARCHAR(100) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Telefones` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_cliente` INTEGER NOT NULL,
    `numero` VARCHAR(20) NOT NULL,

    UNIQUE INDEX `Telefones_numero_key`(`numero`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Telefones` ADD CONSTRAINT `Telefones_id_cliente_fkey` FOREIGN KEY (`id_cliente`) REFERENCES `Clientes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
