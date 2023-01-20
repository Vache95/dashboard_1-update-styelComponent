export type DataDiagram = {
  name: string;
  uv: number;
  pv: number;
  amt: number;
};

export type DataDiagramCuctom = {
  rv: string;
} & DataDiagram;

export interface DataDiagramCuctom2 extends DataDiagram {
  rv: string;
}
