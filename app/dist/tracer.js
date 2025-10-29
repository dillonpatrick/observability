"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sdk_node_1 = require("@opentelemetry/sdk-node");
const auto_instrumentations_node_1 = require("@opentelemetry/auto-instrumentations-node");
const sdk_metrics_1 = require("@opentelemetry/sdk-metrics");
const resources_1 = require("@opentelemetry/resources");
const exporter_trace_otlp_proto_1 = require("@opentelemetry/exporter-trace-otlp-proto");
const semantic_conventions_1 = require("@opentelemetry/semantic-conventions");
const api_1 = require("@opentelemetry/api");
const exporter_metrics_otlp_grpc_1 = require("@opentelemetry/exporter-metrics-otlp-grpc");
const SERVICE_NAME = 'app-rocketseat';
const metricsExporter = new exporter_metrics_otlp_grpc_1.OTLPMetricExporter({
    url: 'http://127.0.0.1:4317',
});
const metricReader = new sdk_metrics_1.PeriodicExportingMetricReader({
    exporter: metricsExporter,
    exportIntervalMillis: 10000,
});
const traceExporter = new exporter_trace_otlp_proto_1.OTLPTraceExporter();
const resource = (0, resources_1.resourceFromAttributes)({
    [semantic_conventions_1.ATTR_SERVICE_NAME]: SERVICE_NAME,
    [semantic_conventions_1.ATTR_SERVICE_VERSION]: '1.0.0',
});
const mergedResource = resource;
api_1.diag.setLogger(new api_1.DiagConsoleLogger(), api_1.DiagLogLevel.INFO);
const sdk = new sdk_node_1.NodeSDK({
    traceExporter,
    metricReader,
    instrumentations: [(0, auto_instrumentations_node_1.getNodeAutoInstrumentations)()],
    resource: mergedResource,
    serviceName: SERVICE_NAME,
});
exports.default = sdk;
//# sourceMappingURL=tracer.js.map