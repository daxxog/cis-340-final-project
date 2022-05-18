DROP TABLE admin_site_settings;
CREATE TABLE admin_site_settings (
    setting TEXT NOT NULL PRIMARY KEY,
    value TEXT NOT NULL
);
INSERT INTO admin_site_settings
(setting, value)
VALUES('sales_tax', '5.5%');


DROP TABLE responsible_party;
CREATE TABLE responsible_party (
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL
);
INSERT INTO responsible_party
(id, name)
VALUES(1, 'Bob the Acquisition Manager at ACME Corp.');
INSERT INTO responsible_party
(id, name)
VALUES(2, 'Steve from Minecraft');


DROP TABLE customer_type;
CREATE TABLE customer_type (
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    discount_percentage INTEGER DEFAULT 0 NOT NULL,
    -- SQLite doesn't have a "boolean" type, so we use a constrained integer instead
    apply_sales_tax INTEGER DEFAULT 1 NOT NULL CHECK (apply_sales_tax IN (0, 1)),
    discount_product_type_id INTEGER,
    CONSTRAINT discount_product_type FOREIGN KEY (discount_product_type_id) REFERENCES product_type(id)
);
INSERT INTO customer_type
(id, name, discount_percentage, apply_sales_tax, discount_product_type_id)
VALUES(1, 'Senior citizen', 5, 0, NULL);
INSERT INTO customer_type
(id, name, discount_percentage, apply_sales_tax, discount_product_type_id)
VALUES(2, 'Veteran', 10, 0, NULL);
INSERT INTO customer_type
(id, name, discount_percentage, apply_sales_tax, discount_product_type_id)
VALUES(3, 'Teacher', 10, 1, 1);


DROP TABLE customer;
CREATE TABLE customer (
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    phone_number TEXT NOT NULL,
    email_address TEXT NOT NULL,
    customer_type_id INTEGER NOT NULL,
    responsible_party_id INTEGER NOT NULL,
    CONSTRAINT responsible_party FOREIGN KEY (responsible_party_id) REFERENCES responsible_party(id),
    CONSTRAINT customer_type FOREIGN KEY (customer_type_id) REFERENCES customer_type(id)
);
INSERT INTO customer
(id, first_name, last_name, phone_number, email_address, customer_type_id, responsible_party_id)
VALUES(1, 'Alice', 'Jefferson', '555-123-4567', 'alice@example.com', 1, 1);
INSERT INTO customer
(id, first_name, last_name, phone_number, email_address, customer_type_id, responsible_party_id)
VALUES(2, 'Michael', 'Jackson', '555-123-4562', 'hehe@example.com', 3, 2);
INSERT INTO customer
(id, first_name, last_name, phone_number, email_address, customer_type_id, responsible_party_id)
VALUES(3, 'Mr.', 'Yeet', '555-423-0032', 'yeet@example.com', 2, 1);
INSERT INTO customer
(id, first_name, last_name, phone_number, email_address, customer_type_id, responsible_party_id)
VALUES(4, 'Dr.', 'Chow', '555-989-4568', 'chow@example.com', 2, 2);
INSERT INTO customer
(id, first_name, last_name, phone_number, email_address, customer_type_id, responsible_party_id)
VALUES(5, 'Ricky', 'O''Caine', '555-912-5934', 'ricky@example.com', 3, 2);
INSERT INTO customer
(id, first_name, last_name, phone_number, email_address, customer_type_id, responsible_party_id)
VALUES(6, 'Coraline', 'Duckett', '555-987-2364', 'duckett@example.com', 1, 1);
INSERT INTO customer
(id, first_name, last_name, phone_number, email_address, customer_type_id, responsible_party_id)
VALUES(7, 'Tracey', 'Beeston', '555-923-5432', 'tbeeston@example.com', 2, 2);
INSERT INTO customer
(id, first_name, last_name, phone_number, email_address, customer_type_id, responsible_party_id)
VALUES(8, 'Karyl', 'Lande', '555-023-9188', 'klande@example.com', 3, 1);



DROP TABLE user_login;
CREATE TABLE user_login (
    username TEXT NOT NULL PRIMARY KEY,
    password_hashed TEXT NOT NULL,
    -- SQLite doesn't have a "boolean" type, so we use a constrained integer instead
    is_admin INTEGER DEFAULT 0 NOT NULL CHECK (is_admin IN (0, 1)),
    customer_id INTEGER,
    CONSTRAINT customer FOREIGN KEY (customer_id) REFERENCES customer(id)
);
INSERT INTO user_login
(username, password_hashed, is_admin)
-- solarwinds123
VALUES('admin', '1.HMACSHA512.512.2000.hAs3oSPx5iYy9nP1cWRbQA==.Tca0ANcx8rqgeBHMB1IGoJOFm7LQzoySBcW39QJSSPhX7hIhYhOUOAoPjy6Jsvvz6cCBQUt3AiMNjIo76XWadQ==', 1);
INSERT INTO user_login
(username, password_hashed, is_admin, customer_id)
-- solarwinds123
VALUES('alice1', '1.HMACSHA512.512.2000.QT49zr0OEZuO+1WmwkpkKQ==.e8Q2403NMFZDnoL7J7efVMXXNaeSLstQ8kBEhAksJxbXnq2MZnKptb1+5iW0QA6QUqBvOr6NsLHGORhrgLGmZQ==', 0, 1);
-- password
INSERT INTO user_login
(username, password_hashed, is_admin, customer_id)
VALUES('thriller1', '1.HMACSHA512.512.2000.SWnAIdeF99/+ruG5TeBo7g==.FfQZ74A85MI+K9dCMGZLmfFtAjJpbAloCfwID3m4X+ocRe5ZxLF0dI8EmaIJUzQRashP+opvaZbDpsWjDzPU0A==', 0, 2);
INSERT INTO user_login
(username, password_hashed, is_admin, customer_id)
VALUES('yeet', '1.HMACSHA512.512.2000.xJISxbxx6ycwZQMWS5Z3og==.UyvL//1EEVR5KeL0GvTKjzdimY14BM3VDUqSLmnGWUrPf4Wz5CSmye2y1O8AlNpRY4aOQQOMLLSOa5YEwBkCAw==', 0, 3);
INSERT INTO user_login
(username, password_hashed, is_admin, customer_id)
VALUES('chow2', '1.HMACSHA512.512.2000.ZoaapdMuRO1qbnuuc9jPnw==.s4ToCXLBW4JP15ITGf4wlm7eXAUuF7MFNLErP7XMOQE7iIDWfBFECoG4fzIjP3kexFeXWPs2Dne8R4CmpaV8GQ==', 0, 4);
INSERT INTO user_login
(username, password_hashed, is_admin, customer_id)
VALUES('rickroll28', '1.HMACSHA512.512.2000.b7JoftsZei9PUxsgMWFC6Q==.6sIERNqHfVoErzTCLA5HZO7AcRCn0nD5tI9lKiZQid02A8Md/45dx8PWFBNzzf2W7Trtx6uwMT3ktQyihJslcA==', 0, 5);
INSERT INTO user_login
(username, password_hashed, is_admin, customer_id)
VALUES('duckett3', '1.HMACSHA512.512.2000.ay05AzAPRiOJE6gqaOUGrA==.NO4+Xrd+y1ioLnlK4J6ogpWpNtmj7Eudu++G4OAue89Fa2fNaUsTCHKCl6oVDxAVWmtM5hDA3Cu9rbfeASlE/Q==', 0, 6);
INSERT INTO user_login
(username, password_hashed, is_admin, customer_id)
VALUES('tbeeston88', '1.HMACSHA512.512.2000.k0jWYWh7A4m8IrrX6KAmiQ==.vYzECoPhu+UiNtYJlFaQaT2WRucUxMKw1bolGBG+bPMFKGz0ETD/TW/rVlrR+dRSUiuH/fppt7ZFjKEFtA8ALA==', 0, 7);
INSERT INTO user_login
(username, password_hashed, is_admin, customer_id)
VALUES('klande', '1.HMACSHA512.512.2000.7k6d0i4VzT61X+YLTHeHAg==.7HNp7JA+lU/GiQxiZsN4I87YNL72EaDvnz34TLjDwleewcmxcT6SRz6KwJhVB0aME8kdAfZ+RGTgxp/hdlx67Q==', 0, 8);


-- Product types are things
-- like books, grocery items, musical instruments, clothing, etc. in the database.
DROP TABLE product_type;
CREATE TABLE product_type (
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL
);
INSERT INTO product_type
(id, name)
VALUES(1, 'Books');
INSERT INTO product_type
(id, name)
VALUES(2, 'Grocery');
INSERT INTO product_type
(id, name)
VALUES(3, 'Musical Instruments');
INSERT INTO product_type
(id, name)
VALUES(4, 'Clothing');
INSERT INTO product_type
(id, name)
VALUES(5, 'Games');


-- Clothing is divided into different categories like for men, women, kids etc.
DROP TABLE clothing_category;
CREATE TABLE clothing_category (
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL
);
INSERT INTO clothing_category
(id, name)
VALUES(1, 'Men');
INSERT INTO clothing_category
(id, name)
VALUES(2, 'Women');
INSERT INTO clothing_category
(id, name)
VALUES(3, 'Kids');
INSERT INTO clothing_category
(id, name)
VALUES(4, 'Baby');


DROP TABLE product;
CREATE TABLE product (
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    price_cents INTEGER NOT NULL,
    description TEXT,
    clothing_category_id INTEGER,
    product_type_id INTEGER NOT NULL,
    CONSTRAINT clothing_category FOREIGN KEY (clothing_category_id) REFERENCES clothing_category(id),
    CONSTRAINT product_type FOREIGN KEY (product_type_id) REFERENCES product_type(id)
);
INSERT INTO product
(id, name, price_cents, description, clothing_category_id, product_type_id)
VALUES(1, 'Baby Kubernetes Onsie', 500, 'For all your cloud-ready babies!', 4 /* baby */, 4 /* clothing */);
INSERT INTO product
(id, name, price_cents, description, clothing_category_id, product_type_id)
VALUES(2, 'Best Dad Ever Shirt', 1000, "Makes a great father's day gift!", 1 /* men */, 4 /* clothing */);
INSERT INTO product
(id, name, price_cents, description, clothing_category_id, product_type_id)
VALUES(3, 'Mommy Snuggles Shirt', 1000, 'A great gift for your wife on valentines day!', 2 /* women */, 4 /* clothing */);
INSERT INTO product
(id, name, price_cents, description, clothing_category_id, product_type_id)
VALUES(4, 'Kids Roblox Pajamas', 700, 'Every kid loves Roblox', 3 /* kids */, 4 /* clothing */);
INSERT INTO product
(id, name, price_cents, description, clothing_category_id, product_type_id)
VALUES(5, 'Kids Minecraft Pajamas', 700, 'Every kid loves Minecraft', 3 /* kids */, 4 /* clothing */);
INSERT INTO product
(id, name, price_cents, description, clothing_category_id, product_type_id)
VALUES(6, "Baby's First Cloud App", 500, 'Teach your baby how to write highly scalable web applications', NULL, 1 /* books */);
INSERT INTO product
(id, name, price_cents, description, clothing_category_id, product_type_id)
VALUES(7, '50 Easy Recipes', 700, 'Want to make food at home, but always in a rush?', NULL, 1 /* books */);
INSERT INTO product
(id, name, price_cents, description, clothing_category_id, product_type_id)
VALUES(8, "Can o' Beans", 200, 'The Magical Fruit', NULL, 2 /* grocery */);
INSERT INTO product
(id, name, price_cents, description, clothing_category_id, product_type_id)
VALUES(9, 'Government Cheese', 50, 'Surplus cheese, no mold', NULL, 2 /* grocery */);
INSERT INTO product
(id, name, price_cents, description, clothing_category_id, product_type_id)
VALUES(10, 'Government Cheese (moldy)', 20, 'Surplus cheese, mold included', NULL, 2 /* grocery */);
INSERT INTO product
(id, name, price_cents, description, clothing_category_id, product_type_id)
VALUES(11, 'Acoustic Guitar', 300, 'A stringed instrument', NULL, 3 /* musical instruments */);
INSERT INTO product
(id, name, price_cents, description, clothing_category_id, product_type_id)
VALUES(12, 'Drum Set', 5000, 'Make some noise!', NULL, 3 /* musical instruments */);
INSERT INTO product
(id, name, price_cents, description, clothing_category_id, product_type_id)
VALUES(13, 'Monopoly', 1500, 'A classic property trading game', NULL, 5 /* games */);


DROP TABLE invoice;
CREATE TABLE invoice (
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    time_stamp INTEGER NOT NULL,
    body TEXT NOT NULL
);


DROP TABLE customer_activity;
CREATE TABLE customer_activity (
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    customer_id INTEGER NOT NULL,
    product_id INTEGER NOT NULL,
    invoice_id INTEGER NOT NULL,
    how_many INTEGER DEFAULT 1 NOT NULL,
    CONSTRAINT customer FOREIGN KEY (customer_id) REFERENCES customer(id),
    CONSTRAINT product FOREIGN KEY (product_id) REFERENCES product(id),
    CONSTRAINT invoice FOREIGN KEY (invoice_id) REFERENCES invoice(id)
);
