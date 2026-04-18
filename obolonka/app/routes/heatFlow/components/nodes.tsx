import { type ReactElement } from 'react';
import { Handle, Position, useNodes, type NodeProps } from '@xyflow/react';
import type { NodeData } from './types';
import '../css/nodes.css';

// House Node Component
export function HouseNode({ data }: NodeProps): ReactElement {
    const allNodes = useNodes();

    const label = data.label as string;
    const connectedHeaters = (data.connectedHeaters as string[]) || [];

    const connectedLabels = connectedHeaters.map(id => {
        const sourceNode = allNodes.find(n => n.id === id);
        return sourceNode?.data?.label || id;
    });

    return (
        <div className="custom-node house-node">
            <Handle type="target" position={Position.Left} style={{ borderRadius: '2px' }} />

            <div style={{ fontWeight: 'bold', color: '#007acc' }}>
                HOUSE: {label}
            </div>

            {connectedHeaters.length > 0 && (
                <div style={{ fontSize: '11px', color: '#444' }}>
                    Sources: {connectedLabels.join(', ')}
                </div>
            )}

            <div className="custom-tooltip">
                ID: {label} • {connectedHeaters.length} sources
            </div>
        </div>
    );
}

// Heat Node Component
export function HeatNode({ data }: NodeProps): ReactElement {
    const { label } = data as unknown as NodeData;

    return (
        <div className="custom-node heat-node">
            <div style={{ fontWeight: 'bold', color: '#e34c26' }}>
                HEAT SRC: {label}
            </div>

            <Handle type="source" position={Position.Right} style={{ borderRadius: '2px', background: '#e34c26' }} />

            <div className="custom-tooltip">
                Click and drag to connect
            </div>
        </div>
    );
}

// Node types export
export const nodeTypes = {
    house: HouseNode,
    heat: HeatNode,
};
