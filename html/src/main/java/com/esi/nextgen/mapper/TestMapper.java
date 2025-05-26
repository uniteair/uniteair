package com.esi.nextgen.mapper;

import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

/**
 * @author : Andrew Kim
 * @file : TestMapper 
 * @version 1.0.0
 * @createDate : 2025-04-23
 * @updateDate : 2025-04-23
 * @desc : DB 데이터 처리를 위한 mapper
 */
@Mapper
public interface TestMapper {

    public Map<String, Object> getData();
}
