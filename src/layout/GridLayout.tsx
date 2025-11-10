import { type childrenProps } from "../types";

// --- DEFAULT ---

// Para grid-cols
const gridColsMap: Record<number, string> = {
  1: "grid-cols-1",
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-4",
  5: "grid-cols-5",
  6: "grid-cols-6",
  7: "grid-cols-7",
  8: "grid-cols-8",
  9: "grid-cols-9",
  10: "grid-cols-10",
  11: "grid-cols-11",
  12: "grid-cols-12",
};

// Para grid-rows
const gridRowsMap: Record<number, string> = {
  1: "grid-rows-1",
  2: "grid-rows-2",
  3: "grid-rows-3",
  4: "grid-rows-4",
  5: "grid-rows-5",
  6: "grid-rows-6",
  7: "grid-rows-7",
  8: "grid-rows-8",
  9: "grid-rows-9",
  10: "grid-rows-10",
  11: "grid-rows-11",
  12: "grid-rows-12",
};

// --- SM ---

// Para sm:grid-cols
const SMGridColsMap: Record<number, string> = {
  1: "sm:grid-cols-1",
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-3",
  4: "sm:grid-cols-4",
  5: "sm:grid-cols-5",
  6: "sm:grid-cols-6",
  7: "sm:grid-cols-7",
  8: "sm:grid-cols-8",
  9: "sm:grid-cols-9",
  10: "sm:grid-cols-10",
  11: "sm:grid-cols-11",
  12: "sm:grid-cols-12",
};

// Para sm:grid-rows
const SMGridRowsMap: Record<number, string> = {
  1: "sm:grid-rows-1",
  2: "sm:grid-rows-2",
  3: "sm:grid-rows-3",
  4: "sm:grid-rows-4",
  5: "sm:grid-rows-5",
  6: "sm:grid-rows-6",
  7: "sm:grid-rows-7",
  8: "sm:grid-rows-8",
  9: "sm:grid-rows-9",
  10: "sm:grid-rows-10",
  11: "sm:grid-rows-11",
  12: "sm:grid-rows-12",
};

// --- MD ---

const MDGridColsMap: Record<number, string> = {
  1: "md:grid-cols-1",
  2: "md:grid-cols-2",
  3: "md:grid-cols-3",
  4: "md:grid-cols-4",
  5: "md:grid-cols-5",
  6: "md:grid-cols-6",
  7: "md:grid-cols-7",
  8: "md:grid-cols-8",
  9: "md:grid-cols-9",
  10: "md:grid-cols-10",
  11: "md:grid-cols-11",
  12: "md:grid-cols-12",
};

const MDGridRowsMap: Record<number, string> = {
  1: "md:grid-rows-1",
  2: "md:grid-rows-2",
  3: "md:grid-rows-3",
  4: "md:grid-rows-4",
  5: "md:grid-rows-5",
  6: "md:grid-rows-6",
  7: "md:grid-rows-7",
  8: "md:grid-rows-8",
  9: "md:grid-rows-9",
  10: "md:grid-rows-10",
  11: "md:grid-rows-11",
  12: "md:grid-rows-12",
};

// --- LG ---

// Para lg:grid-cols
const LGGridColsMap: Record<number, string> = {
  1: "lg:grid-cols-1",
  2: "lg:grid-cols-2",
  3: "lg:grid-cols-3",
  4: "lg:grid-cols-4",
  5: "lg:grid-cols-5",
  6: "lg:grid-cols-6",
  7: "lg:grid-cols-7",
  8: "lg:grid-cols-8",
  9: "lg:grid-cols-9",
  10: "lg:grid-cols-10",
  11: "lg:grid-cols-11",
  12: "lg:grid-cols-12",
};

// Para lg:grid-rows
const LGGridRowsMap: Record<number, string> = {
  1: "lg:grid-rows-1",
  2: "lg:grid-rows-2",
  3: "lg:grid-rows-3",
  4: "lg:grid-rows-4",
  5: "lg:grid-rows-5",
  6: "lg:grid-rows-6",
  7: "lg:grid-rows-7",
  8: "lg:grid-rows-8",
  9: "lg:grid-rows-9",
  10: "lg:grid-rows-10",
  11: "lg:grid-rows-11",
  12: "lg:grid-rows-12",
};

// --- INTERFACE ---

interface gridProps extends childrenProps {
  gridCols?: number;
  gridRows?: number;
  SMgridCols?: number;
  SMgridRows?: number;
  MDgridCols?: number;
  MDgridRows?: number;
  LGgridCols?: number;
  LGgridRows?: number;
  cls?: string;
}

// --- COMPONENT ---

const GridLayout = ({
  children,
  gridCols,
  gridRows,
  SMgridCols,
  SMgridRows,
  MDgridCols,
  MDgridRows,
  LGgridCols,
  LGgridRows,
  cls,
}: gridProps) => {
  // Default
  const gridColsClass: string = gridCols ? gridColsMap[gridCols] : ` `;
  const gridRowsClass: string = gridRows ? gridRowsMap[gridRows] : ` `;
  // SM
  const SMgridColsClass: string = SMgridCols ? SMGridColsMap[SMgridCols] : ` `;
  const SMgridRowsClass: string = SMgridRows ? SMGridRowsMap[SMgridRows] : ` `;
  // MD
  const MDgridColsClass: string = MDgridCols ? MDGridColsMap[MDgridCols] : ` `;
  const MDgridRowsClass: string = MDgridRows ? MDGridRowsMap[MDgridRows] : ` `;
  // LG
  const LGgridColsClass: string = LGgridCols ? LGGridColsMap[LGgridCols] : ` `;
  const LGgridRowsClass: string = LGgridRows ? LGGridRowsMap[LGgridRows] : ` `;

  return (
    <section
      className={`grid ${gridColsClass} ${gridRowsClass} ${SMgridColsClass} ${SMgridRowsClass} ${MDgridColsClass} ${MDgridRowsClass} ${LGgridColsClass} ${LGgridRowsClass} gap-6 ${cls}`}
    >
      {children}
    </section>
  );
};

export default GridLayout;
