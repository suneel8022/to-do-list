package com.nice.todolist.controller;


import com.nice.todolist.dao.TasksDao;
import com.nice.todolist.entity.Task;
import com.nice.todolist.service.TaskService;
import jakarta.transaction.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class TaskController {

    private TaskService taskService;

    public TaskController(TaskService theTaskService) {
        taskService = theTaskService;
    }

    @GetMapping("/tasks")
    public List<Task> getTasks() {
        return taskService.getTasks();
    }

    @GetMapping("/tasks/{id}")
    public Task getTask(@PathVariable int id){
        return taskService.getTask(id);
    }


    @PostMapping("/tasks")
    public Task addTask(@RequestBody Task theTask) {

        theTask.setId(0);

        Task dbTask = taskService.addTask(theTask);

        return dbTask;

    }


    @PutMapping("/tasks")
    public Task updateTask( @RequestBody Task theTask) {
        Task updatedTask = taskService.addTask(theTask);
        return updatedTask ;
    }



}

