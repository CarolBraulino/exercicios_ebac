DROP TRIGGER IF EXISTS ins_film;
CREATE TRIGGER ins_film AFTER INSERT ON film FOR EACH ROW BEGIN
    INSERT INTO film_text (film_id, title, description)
        VALUES (new.film_id, new.title, new.description);
END