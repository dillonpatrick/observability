"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sdk_node_1 = require("@opentelemetry/sdk-node");
const sdk_trace_node_1 = require("@opentelemetry/sdk-trace-node");
const auto_instrumentations_node_1 = require("@opentelemetry/auto-instrumentations-node");
const sdk_metrics_1 = require("@opentelemetry/sdk-metrics");
const resources_1 = require("@opentelemetry/resources");
const exporter_trace_otlp_proto_1 = require("@opentelemetry/exporter-trace-otlp-proto");
const semantic_conventions_1 = require("@opentelemetry/semantic-conventions");
const sdk_logs_1 = require("@opentelemetry/sdk-logs");
const exporter_logs_otlp_proto_1 = require("@opentelemetry/exporter-logs-otlp-proto");
const api_1 = require("@opentelemetry/api");
const traceExporter = new exporter_trace_otlp_proto_1.OTLPTraceExporter();
const resource = (0, resources_1.resourceFromAttributes)({
    [semantic_conventions_1.ATTR_SERVICE_NAME]: 'app-rocketseat',
    [semantic_conventions_1.ATTR_SERVICE_VERSION]: '1.0.0',
});
const mergedResource = resource;
api_1.diag.setLogger(new api_1.DiagConsoleLogger(), api_1.DiagLogLevel.INFO);
const sdk = new sdk_node_1.NodeSDK({
    spanProcessor: new sdk_trace_node_1.BatchSpanProcessor(traceExporter),
    traceExporter: new sdk_trace_node_1.ConsoleSpanExporter(),
    metricReader: new sdk_metrics_1.PeriodicExportingMetricReader({
        exporter: new sdk_metrics_1.ConsoleMetricExporter(),
    }),
    logRecordProcessor: new sdk_logs_1.SimpleLogRecordProcessor(new exporter_logs_otlp_proto_1.OTLPLogExporter()),
    instrumentations: [(0, auto_instrumentations_node_1.getNodeAutoInstrumentations)()],
    resource: mergedResource,
});
exports.default = sdk;
//# sourceMappingURL=tracer.js.map