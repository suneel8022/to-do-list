package com.nice.todolist.service;

import com.nice.todolist.dao.TasksDao;
import com.nice.todolist.entity.Task;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskServiceImpl implements TaskService {

    private TasksDao tasksDao;

    @Autowired
    public TaskServiceImpl(TasksDao theTasksDao) {
        tasksDao = theTasksDao;
    }



    @Override
    public List<Task> getTasks() {
            return tasksDao.getTasks();
    }

    @Override
    @Transactional
    public Task addTask(Task task) {
            return tasksDao.addTask(task);
    }


    @Override
    public Task getTask(int theId) {
        return tasksDao.getTask(theId);
    }

    @Override
    @Transactional
    public Task updateTask(Task task) {
        return tasksDao.updateTask(task);
    }

}
