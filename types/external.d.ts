declare module "@nivo/line" {
  export const ResponsiveLineCanvas: any;
}
declare module "@nivo/bar" {
  export const ResponsiveBarCanvas: any;
}
declare module "@nivo/core" {
  const core: any; export = core;
}
declare module "react-intersection-observer" {
  export const InView: any;
  export function useInView(options?: any): { ref: any; inView: boolean; entry?: any };
}

// Three.js JSX declarations
declare global {
  namespace JSX {
    interface IntrinsicElements {
      ambientLight: any;
      pointLight: any;
      mesh: any;
      sphereGeometry: any;
      meshStandardMaterial: any;
      fog: any;
      primitive: any;
    }
  }
}
