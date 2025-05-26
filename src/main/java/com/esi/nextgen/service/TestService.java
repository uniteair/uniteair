package com.esi.nextgen.service;


import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.esi.nextgen.mapper.TestMapper;

/**
 * @author : Andrew Kim
 * @file : TestService 
 * @version 1.0.0
 * @createDate : 2025-04-23
 * @updateDate : 2025-04-23
 * @desc : 테스트 Service Interface
 */
@Service
public class TestService {

    @Autowired
    private TestMapper testMapper;

    public Map<String, Object> getData() {
        Map<String, Object> resultMap = new HashMap<>();

        try {
            resultMap = testMapper.getData();
        } catch(Exception e) {
            e.printStackTrace();
        }

        return resultMap;
    }

}