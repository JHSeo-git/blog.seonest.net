declare interface Array<T> {
  filter<U = never>(predicate: BooleanConstructor): NonNullable<T extends U | false ? U : T>[];
}
