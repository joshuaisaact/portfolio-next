"use client";

import {
  QueueListIcon,
  AcademicCapIcon,
  FolderIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  SparklesIcon
} from "@heroicons/react/24/outline";
import { GrYoga } from "react-icons/gr";

interface DataNode {
  id: string;
  label: string;
  description: string;
  count?: string;
  icon: React.ComponentType<{ className?: string }>;
  gradient: string;
}

const oldStructureNodes: DataNode[] = [
  {
    id: "old-poses",
    label: "Poses",
    description: "Individual yoga positions",
    count: "~200",
    icon: GrYoga,
    gradient: "from-slate-500 to-slate-600"
  },
  {
    id: "old-sessions",
    label: "AI Sessions",
    description: "Random combinations",
    count: "∞",
    icon: SparklesIcon,
    gradient: "from-pink-500 to-purple-600"
  }
];

const newStructureNodes: DataNode[] = [
  {
    id: "new-poses",
    label: "Poses",
    description: "Individual yoga positions",
    count: "~200",
    icon: GrYoga,
    gradient: "from-blue-500 to-blue-600"
  },
  {
    id: "sequences",
    label: "Sequences",
    description: "Structured flows (Sun Salutation, etc.)",
    count: "~50",
    icon: QueueListIcon,
    gradient: "from-emerald-500 to-emerald-600"
  },
  {
    id: "classes",
    label: "Classes",
    description: "Combinations of sequences",
    count: "~20",
    icon: AcademicCapIcon,
    gradient: "from-purple-500 to-purple-600"
  }
];

const legacyNode: DataNode = {
  id: "legacy-sessions",
  label: "Sessions",
  description: "Legacy AI-generated (deprecated)",
  count: "legacy",
  icon: SparklesIcon,
  gradient: "from-gray-400 to-gray-500"
};

function DataCard({ node }: { node: DataNode }) {
  const Icon = node.icon;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm p-4 hover:shadow-md transition-all duration-200 group">
      <div className="flex items-start space-x-3">
        <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${node.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="w-5 h-5 text-white" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-1">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mt-0 mb-0">
              {node.label}
            </h4>
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
              {node.count}
            </span>
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed m-0">
            {node.description}
          </p>
        </div>
      </div>
    </div>
  );
}

function FlowArrow({ dashed = false, vertical = false }: { dashed?: boolean; vertical?: boolean }) {
  if (vertical) {
    return (
      <div className="flex justify-center my-3">
        <svg width="24" height="32" className="text-gray-400 dark:text-gray-500">
          <defs>
            <marker
              id={`v-${dashed ? "dashed" : "solid"}-arrow`}
              markerWidth="6"
              markerHeight="4"
              refX="6"
              refY="2"
              orient="auto"
            >
              <polygon points="0 0, 6 2, 0 4" fill="currentColor" />
            </marker>
          </defs>
          <line
            x1="12"
            y1="0"
            x2="12"
            y2="26"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray={dashed ? "6,4" : "none"}
            markerEnd={`url(#v-${dashed ? "dashed" : "solid"}-arrow)`}
          />
        </svg>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center mx-4">
      <svg width="40" height="24" className="text-gray-400 dark:text-gray-500">
        <defs>
          <marker
            id={`h-${dashed ? "dashed" : "solid"}-arrow`}
            markerWidth="6"
            markerHeight="4"
            refX="6"
            refY="2"
            orient="auto"
          >
            <polygon points="0 0, 6 2, 0 4" fill="currentColor" />
          </marker>
        </defs>
        <line
          x1="0"
          y1="12"
          x2="34"
          y2="12"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray={dashed ? "6,4" : "none"}
          markerEnd={`url(#h-${dashed ? "dashed" : "solid"}-arrow)`}
        />
      </svg>
    </div>
  );
}

function ArchitectureDiagram({
  title,
  nodes,
  isOld = false,
  legacyNode
}: {
  title: string;
  nodes: DataNode[];
  isOld?: boolean;
  legacyNode?: DataNode;
}) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
      {/* Header */}
      <div className="p-6 border-b border-gray-100 dark:border-gray-700">
        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2 mt-0">
            {title}
          </h3>
          <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 dark:bg-gray-700/50 text-gray-700 dark:text-gray-300">
            {isOld ? (
              <>
                <ExclamationTriangleIcon className="w-4 h-4 mr-1" />
                Before Refactor
              </>
            ) : (
              <>
                <CheckCircleIcon className="w-4 h-4 mr-1" />
                After Refactor
              </>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Desktop: Horizontal flow */}
        <div className="hidden md:block">
          <div className="flex items-stretch">
            {nodes.map((node, index) => (
              <div key={node.id} className="flex items-center flex-1">
                <div className="flex-1">
                  <DataCard node={node} />
                </div>
                {index < nodes.length - 1 && (
                  <FlowArrow dashed={isOld} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: Vertical flow */}
        <div className="md:hidden">
          {nodes.map((node, index) => (
            <div key={node.id}>
              <DataCard node={node} />
              {index < nodes.length - 1 && (
                <FlowArrow dashed={isOld} vertical />
              )}
            </div>
          ))}
        </div>

        {/* Legacy node for new structure */}
        {!isOld && legacyNode && (
          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
            <div className="text-center mb-4">
              <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2 mt-0">
                Legacy Data Type
              </h4>
            </div>
            <div className="max-w-sm mx-auto opacity-75">
              <DataCard node={legacyNode} />
            </div>
            <p className="text-center text-xs text-gray-500 dark:text-gray-400 mt-3">
              Kept for backwards compatibility
            </p>
          </div>
        )}

        {/* Status indicator */}
        <div className="text-center mt-8">
          <div className="inline-flex items-center px-4 py-2 rounded-lg font-medium bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
            {isOld ? (
              <>
                <ExclamationTriangleIcon className="w-4 h-4 mr-2 text-red-500 dark:text-red-400" />
                No yoga flow logic - poses randomly combined
              </>
            ) : (
              <>
                <CheckCircleIcon className="w-4 h-4 mr-2 text-emerald-500 dark:text-emerald-400" />
                Respects traditional yoga sequencing and structure
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function YogaDataStructure() {
  return (
    <div className="my-12">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">
          Data Architecture Evolution
        </h3>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          From random pose combinations to structured yoga flows
        </p>
      </div>

      <div className="space-y-8">
        <ArchitectureDiagram
          title="Original Approach"
          nodes={oldStructureNodes}
          isOld={true}
        />

        <ArchitectureDiagram
          title="Rebuilt Architecture"
          nodes={newStructureNodes}
          isOld={false}
          legacyNode={legacyNode}
        />
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800 mt-8">
        <div className="text-blue-900 dark:text-blue-100">
          <h4 className="font-bold text-lg mb-2">Key Insight</h4>
          <p className="text-base leading-relaxed">
            The new structure respects traditional yoga sequencing—poses flow into established
            sequences (like Sun Salutation A), sequences combine into balanced classes.
            The legacy AI sessions were kept for backwards compatibility but are being phased out
            in favor of the structured approach.
          </p>
        </div>
      </div>
    </div>
  );
}