import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './entities/todo.entity';
import { DeleteResult, Repository } from 'typeorm';
export declare class TodosService {
    private todoRepository;
    constructor(todoRepository: Repository<Todo>);
    create(createTodoDto: CreateTodoDto): Promise<Todo>;
    findAll(): Promise<Todo[]>;
    findOne(id: number): Promise<Todo>;
    update(id: number, updateTodoDto: UpdateTodoDto): Promise<Todo>;
    remove(id: number): Promise<DeleteResult>;
}
