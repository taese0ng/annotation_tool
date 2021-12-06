const SnakeCase = (data: string) => {
    return data
        .split(/(?=[A-Z])/)
        .join('_')
        .toLowerCase();
};

export const SnakeCaseObj = (object: Record<any, any>) => {
    const Obj: Record<any, any> = {};
    Object.entries(object).forEach((data) => {
        if (String(data[1])) {
            Obj[SnakeCase(data[0])] = data[1] as string;
        }
    });

    return Obj;
};

export default SnakeCase;
