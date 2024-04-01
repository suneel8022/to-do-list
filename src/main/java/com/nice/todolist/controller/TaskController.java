package com.nice.todolist.controller;


import com.nice.todolist.dao.TasksDao;
import com.nice.todolist.entity.Task;
import com.nice.todolist.service.TaskService;
import jakarta.transaction.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
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


    /*@PutMapping("/tasks")
    public Task updateTask( @RequestBody Task theTask) {
        Task updatedTask = taskService.addTask(theTask);
        return updatedTask ;
    }
     */

    @PutMapping("/tasks/{theId}")
    public Task updateTask( @PathVariable int theId, @RequestBody Task theTask) {
        theTask.setId(theId);
        Task updatedTask = taskService.updateTask(theTask);
        return updatedTask ;
    }


    @DeleteMapping("/tasks/{theId}")
    public String deleteTask(@PathVariable int theId){

        Task theTask = taskService.getTask(theId);

        if(theTask == null){
            throw new RuntimeException("Task id not found - "  + theId);
        }

        taskService.deleteTaskById(theId);

        return "deleted employee id: " + theId;

    }
}

