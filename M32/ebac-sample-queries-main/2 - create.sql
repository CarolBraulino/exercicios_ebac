CREATE TABLE IF NOT EXISTS country (
  country_id smallint NOT NULL AUTO_INCREMENT,
  country varchar(50) NOT NULL,
  last_update timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (country_id)
)

create table country2 as(
select *
from country
where country like 'B%');