import mitt from "mitt";

type Events = {
  foo: string;
  formcreatedItem: () => boolean | undefined;
  bar: number;
};

const emitter = mitt<Events>();

export default emitter;
