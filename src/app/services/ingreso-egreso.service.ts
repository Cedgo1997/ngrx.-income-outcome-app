import { Injectable } from "@angular/core";

import { AngularFirestore } from "@angular/fire/firestore";
import "firebase/firestore";
import { IngresoEgreso } from "../models/ingreso-egreso.model";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: "root",
})
export class IngresoEgresoService {
  constructor(
    private firestore: AngularFirestore,
    private authService: AuthService
  ) {}

  crearIngresoEgreso(ingresoEgreso: IngresoEgreso) {
    return this.firestore
      .doc(`${this.authService.usuario.uid}/ingresos-egresos`)
      .collection("items")
      .add({ ...ingresoEgreso });
  }

  initIngresosEgresosListener(uid: string) {
    this.firestore
      .collection(`${uid}/ingresos-egresos/items`)
      .valueChanges()
      .subscribe((algo) => console.log(algo));
  }
}
