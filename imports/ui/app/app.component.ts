import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app',
  templateUrl: 'app.html'
})
export class AppComponent implements OnInit {
  constructor(private primengConfig: PrimeNGConfig, private translateService: TranslateService) {
    this.translateService.setDefaultLang('es');
    
  }

  ngOnInit() {
    this.primengConfig.ripple = true;
    this.primengConfig.setTranslation({
      startsWith: 'Empieza por',
      contains: 'Contiene',
      notContains: 'No contiene',
      endsWith: 'Termina en',
      equals: 'Es igual a',
      notEquals: 'Es diferente de',
      noFilter: 'Sin filtro',
      lt: 'Menor que',
      lte: 'Menor que o igual a',
      gt: 'Mayor que',
      gte: 'Mayor que o igual a',
      is: 'Es',
      isNot: 'No es',
      before: 'Antes',
      after: 'Después',
      dateIs: 'Fecha es',
      dateIsNot: 'Fecha no es',
      dateBefore: 'Fecha antes de',
      dateAfter: 'Fecha después de',
      clear: 'Limpiar',
      apply: 'Aplicar',
      matchAll: 'Coincidir todo',
      matchAny: 'Coincidir cualquiera',
      addRule: 'Añadir regla',
      removeRule: 'Eliminar regla',
      accept: 'Sí',
      reject: 'No',
      choose: 'Elegir',
      upload: 'Subir',
      cancel: 'Cancelar',
      dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
      dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'],
      dayNamesMin: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá'],
      monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
      monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
      dateFormat: 'dd/mm/yy',
      firstDayOfWeek: 1,
      today: 'Hoy',
      weekHeader: 'Semana',
      weak: 'Débil',
      medium: 'Medio',
      strong: 'Fuerte',
      passwordPrompt: 'Introduzca una contraseña',
      emptyMessage: 'No hay resultados',
      emptyFilterMessage: 'No hay resultados',
    });
  }
}
