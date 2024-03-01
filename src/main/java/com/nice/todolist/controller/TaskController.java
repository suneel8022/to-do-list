package com.nice.todolist.controller;


import com.nice.todolist.dao.TasksDao;
import com.nice.todolist.entity.Task;
import com.nice.todolist.service.TaskService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class TaskController {

    private TaskService taskService;

    public TaskController(TaskService theTaskService) {
        taskService = theTaskService;
    }

    @GetMapping("tasks")
    public List<Task> getTasks() {
        return taskService.getTasks();
    }



}

