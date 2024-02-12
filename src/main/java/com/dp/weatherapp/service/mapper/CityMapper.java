package com.dp.weatherapp.service.mapper;

import com.dp.weatherapp.domain.City;
import com.dp.weatherapp.service.dto.CityDTO;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link City} and its DTO {@link CityDTO}.
 */
@Mapper(componentModel = "spring")
public interface CityMapper extends EntityMapper<CityDTO, City> {}
