import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PersonsService} from "../../common/services/persons.service";
import {Observable} from "rxjs";
import {IPerson} from "../../common/interfaces/persons.interface";
import {TodoService} from "../../common/services/todo.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  form: FormGroup=new FormGroup({
    firstname: new FormControl('', Validators.required),
    Lastname: new FormControl('', Validators.required),
    email:new FormControl('', [Validators.required,
                                                 Validators.email]),
    street: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    dueDate: new FormControl('', Validators.required),
    responsiblePersonId: new FormControl('',Validators.required),
  })
persons$:Observable<IPerson[]>=this.personService.getPersons();
  constructor(
    private personService: PersonsService,
    private todoService: TodoService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  submit() {
    this.form.markAllAsTouched()
    if(this.form.invalid) return

    this.todoService.addTodo(this.form.value)
      .subscribe(()=>{
        this.router.navigate(['/list'])
      })
  }
}
