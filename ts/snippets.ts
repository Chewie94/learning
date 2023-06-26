//Make a type nullable
type Nullable<T> = { [K in keyof T] : T[K] | null }; 

//Readonly
type ReadonlyProps<T> = {
    readonly [P in keyof T]: T[P];
};

interface Props {
    title: string;
    content: string;
};

type ReadonlyComponentProps = ReadonlyProps<Props>;

// Unions
type BadShape = {
    kind: string;
    radius?: string;
    width?: string;
    height?: number;
    size?: number;
};

type GoodShape = 
    | { kind: "circle", radius: number } 
    | { kind: "rectangle"; width: number; height: number; } 
    | { kind: "square"; size: number };

//Type Guards
type Entity = Person | Company;

interface Person {
    type: "person";
    name: string;
    age: number;
};

interface Company {
    type: "company",
    name: string;
    numberOfEmployees: number;
};

// Bad
const isPersonBad = (entity: Entity): boolean => {
    return entity.type === "person";
};

// Good
const isPersonGood = (entity: Entity): entity is Person => {
    return entity.type === "person";
};