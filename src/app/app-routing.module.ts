// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { EspecialidadesComponent } from './especialidades/especialidades.component';
import { MedicosComponent } from './medicos/medicos.component';
import { HorariosComponent } from './horarios/horarios.component';
import { AsignarHorariosComponent } from './asignar-horarios/asignar-horarios.component';

const routes: Routes = [
  { path: '', redirectTo: '/admin/especialidades', pathMatch: 'full' },
  {
    path: 'admin',
    component: AdminMenuComponent,
    children: [
      { path: 'especialidades', component: EspecialidadesComponent },
      { path: 'medicos', component: MedicosComponent },
      { path: 'horarios', component: HorariosComponent },
      { path: 'asignar-horarios', component: AsignarHorariosComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
