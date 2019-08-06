package com.jshen.bike.controllers;

import com.jshen.bike.model.Bike;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController //@RestController is for rest service, it is combination of @Controller and @ResponseBody
@RequestMapping("/api/v1/bikes")
public class BikesController {

   @GetMapping
   public List<Bike> list() {
        List<Bike> bikes = new ArrayList<>();
        return bikes;
   }

   @PostMapping
   @ResponseStatus(HttpStatus.OK)
   public void create(@RequestBody Bike bike){

   }

   @GetMapping("/{id}")
   public Bike get(@PathVariable("id") long id){
       return new Bike();
   }
}
