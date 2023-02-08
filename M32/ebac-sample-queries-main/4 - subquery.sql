select a.film_id, a.title
from film a
where a.film_id not in (
select b.film_id from inventory b);