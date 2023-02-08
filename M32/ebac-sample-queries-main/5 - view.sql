DROP VIEW film_list;
CREATE VIEW film_list AS
select
  film.film_id AS FID,
  film.title AS title,
  film.description AS description,
  category.name AS category,
  film.rental_rate AS price,
  film.length AS length,
  film.rating AS rating,
  group_concat(
    concat(
      actor.first_name,
      ' ',
      actor.last_name
    ) separator ', '
  ) AS actors
from
  category
  left join film_category on category.category_id = film_category.category_id
  left join film on film_category.film_id = film.film_id
  inner join film_actor on film.film_id = film_actor.film_id
  inner join actor on film_actor.actor_id = actor.actor_id
group by
  film.film_id,
  category.name