CREATE TABLE IF NOT EXISTS city (
  city_id smallint NOT NULL AUTO_INCREMENT,
  city varchar(50) NOT NULL,
  country_id smallint NOT NULL,
  last_update timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (city_id),
  KEY idx_fk_country_id (country_id),
  CONSTRAINT fk_city_country FOREIGN KEY (country_id) REFERENCES country (country_id)
)