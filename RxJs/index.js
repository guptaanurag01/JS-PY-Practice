const {
  of,
  Observable,
  interval,
  Subject,
  switchMap,
  throwError,
  retry,
  catchError,
  takeUntil,
  from,
  map,
  concatMap,
  delay,
  pipe,
  mergeWith,
  take,
  range,
  filter,
  mergeMap,
  BehaviorSubject,
  ReplaySubject,
  AsyncSubject,
} = require("rxjs");
const axios = require("axios");

// of(1, 2, 3).subscribe((res) => {
//   console.log("%cindex.js:4 OF: ", "color: #007acc;", res);
// });

let obs$ = new Observable((subscribe) => {
  subscribe.next(1);
  subscribe.next(2);
  subscribe.next(3);
  subscribe.complete();
});
// obs$.subscribe({
//   next: (v) => console.log(v),
//   error: (e) => console.log(e),
//   complete: () => console.log("Completed!"),
// });

// // ================ Cold vs Hot Observables ================
// const cold$ = interval(1000);
// cold$.subscribe((v) => console.log("A", v));

// setTimeout(() => {
//   cold$.subscribe((v) => console.log("B", v));
// },2000);

// const subject = new Subject();
// interval(1000).subscribe(subject);
// subject.subscribe((v) => console.log("A", v));
// setTimeout(() => {
//   subject.subscribe((v) => console.log("B", v));
// }, 3000);

// of(1, 2, 3, 4)
//   .pipe(switchMap((v) => of(v * 10)))
//   .subscribe(console.log);

// throwError(()=> new Error('Fail')).pipe(
//     retry(2),
//     catchError(err => of("Recoved"))
// ).subscribe(console.log)

//  Unsubscription Patterns
// const destroy$ = new Subject();
// interval(1000)
// .pipe(takeUntil(destroy$))
// .subscribe(console.log);

// setTimeout(() => {
//     destroy$.next()
// },5000);

// from(axios.get("https://jsonplaceholder.typicode.com/posts"))
//   .pipe(map((res) => res.data))
//   .subscribe(console.log);

// from([1, 2, 3, 4]).pipe(
//   concatMap((v) => of(v).pipe(delay(1000)))).subscribe(console.log)

// const obs$1 = interval(1000).pipe(take(3));
// const obs$2 = interval(500).pipe(take(3));

// obs$1.pipe(mergeWith(obs$2)).subscribe((value) => console.log(value));

// range(1, 200)
//   .pipe(
//     filter((x) => x % 2 === 1),
//     map((x) => x + x)
//   )
//   .subscribe((x) => console.log(x));

//  #    switchMap
// console.log('--- switchMap ---');
// of('A', 'B', 'C')
//   .pipe(
//     switchMap(value =>
//       of(value).pipe(
//         delay(500),
//         map(v => `Result ${v}`)
//       )
//     )
//   )
//   .subscribe(console.log);

// console.log('--- mergeMap ---');
// of('A', 'B', 'C')
// .pipe(
//     mergeMap(value=>
//         of(value).pipe(
//             delay(100),
//             map(v => `Result ${v}`)
//         )
//     )
// ).subscribe(console.log)

// console.log('--- concatMap ---');
// of('A', 'B', 'C')
//   .pipe(
//     concatMap(value =>
//       of(value).pipe(
//         delay(1000),
//         map(v => `Result ${v}`)
//       )
//     )
//   )
//   .subscribe(console.log);

// const subject = new Subject()
// subject.subscribe(v => console.log("A:",v))
// subject.next(1)
// subject.next(2)
// subject.subscribe(v => console.log("B:",v))
// subject.next(3)

// const subject = new BehaviorSubject(0);
// subject.subscribe((v) => console.log("A:", v));
// subject.next(1);
// subject.next(2);
// subject.subscribe((v) => console.log("B", v));
// subject.next(3);

// const subject = new ReplaySubject(1000);
// // subject.subscribe(v => console.log("A: ",v))
// subject.next(1)
// subject.next(2)
// subject.next(3)
// subject.subscribe(v => console.log("B: ",v))

// const subject = new AsyncSubject();
// subject.subscribe((v) => console.log(v));
// subject.next(1);
// subject.next(2);
// subject.next(3);
// subject.complete();
