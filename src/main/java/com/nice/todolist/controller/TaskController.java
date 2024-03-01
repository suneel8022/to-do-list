package com.nice.todolist.controller;


import com.nice.todolist.dao.TasksDao;
import com.nice.todolist.entity.Task;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class TaskController {

    private TasksDao tasksDao;

    public TaskController(TasksDao theTasksDao) {
        tasksDao = theTasksDao;
    }

    @GetMapping("/tasks")
    public List<Task> getTasks() {
        return tasksDao.getTasks();
    }
}

