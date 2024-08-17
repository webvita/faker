/**
 * Represents an abstract class for generating items of type T.
 * @template T The type of items to generate.
 */
abstract class Generator<T> {
    abstract generate(): T;
    generateMany(count: number): T[] {
        const items: T[] = [];
        for (let i = 0; i < count; i++) {
            items.push(this.generate());
        }
        return items;
    }
}

export default Generator; 