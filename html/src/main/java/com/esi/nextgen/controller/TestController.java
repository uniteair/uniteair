package com.esi.nextgen.controller;

import java.util.HashMap;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.esi.nextgen.service.TestService;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;



/**
 * @author : Andrew Kim
 * @file : TestController 
 * @version 1.0.0
 * @createDate : 2025-04-23
 * @updateDate : 2025-04-23
 * @desc : 테스트 Controller
 */
@Controller
public class TestController {

    private final Logger log = LoggerFactory.getLogger(this.getClass());

    private TestService testService;

    @Autowired
    public TestController(TestService testService) {
        this.testService = testService;
    }

    @RequestMapping(value = "/test", method = RequestMethod.GET)
    public String test(
        HttpServletRequest req
        , HttpServletResponse res
        , Model model
    ) {
        String result = "pages/test/test";

        return result;
    }

    @RequestMapping(value = "/chart", method = RequestMethod.GET)
    public String chart(
        HttpServletRequest req
        , HttpServletResponse res
        , Model model
    ) {
        String result = "pages/test/chart";

        return result;
    }

    @RequestMapping(value = "/dataTables", method = RequestMethod.GET)
    public String dataTables(
        HttpServletRequest req
        , HttpServletResponse res
        , Model model
    ) {
        String result = "pages/test/datatables";

        return result;
    }

    @RequestMapping(value = "/dbTest", method = RequestMethod.GET)
    public String dbTest(
        HttpServletRequest req
        , HttpServletResponse res
        , Model model
    ) {
        String result = "pages/test/dbTest";
        Map<String, Object> resultMap = new HashMap<>();

        try {
            resultMap = testService.getData();
        } catch(Exception e) {
            e.printStackTrace();
        }

        if(null != resultMap && !resultMap.isEmpty()) {
            model.addAttribute("no", String.valueOf(resultMap.get("no")));
            model.addAttribute("cst_nm", String.valueOf(resultMap.get("cst_nm")));
            model.addAttribute("cst_email", String.valueOf(resultMap.get("cst_email")));
            model.addAttribute("inst_dtm", String.valueOf(resultMap.get("inst_dtm")));
            model.addAttribute("mdf_dtm", String.valueOf(resultMap.get("mdf_dtm")));
        }

        return result;
    }

    @RequestMapping(value = "/getData", method = RequestMethod.POST)
    public @ResponseBody Map<String, Object> getData() {
        Map<String, Object> resultMap = new HashMap<>();

        try {
            resultMap = testService.getData();
        } catch(Exception e) {
            e.printStackTrace();
        }

        return resultMap;

    }

    @GetMapping("/contents")
    public String contents() {
        return "pages/contents"; // src/main/resources/templates/pages/prototype.html
    }
    
}
