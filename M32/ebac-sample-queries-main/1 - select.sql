select first_name, last_name
    from actor
    where  last_name LIKE 'C%'
    order by first_name


select film_category.category_id, film.title from film_category
    inner join  film 
        on film_category.film_id=film.film_id
    order by film.title


select address
    from address
    where district='' 
    order by city_id asc;

Select a.category_id, count(a.film_id) as NumberOfFilms
    from film_category a
    group by a.category_id
    order by NumberOfFilms

select b.name, count(a.film_id) as NumberOfFilms
    from film_category a
    inner join category b
        on a.category_id=b.category_id
    group by a.category_id
    having NumberOfFilms>49
    order by NumberOfFilms

select a.film_id, a.title
    from film a
    where a.film_id not in (
        select b.film_id from inventory b
    );