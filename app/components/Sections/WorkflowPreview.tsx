"use client";

import { useState } from "react";

const workflows = [
  {
    name: "HRMS",
    input: "An employee asks how much annual leave they have left.",
    step: "The HR assistant retrieves the employee’s leave balance from their HR record.",
    result: "The employee gets their remaining leave days in the conversation.",
  },
  {
    name: "HR Approvals",
    input: "An employee submits a request that needs manager approval.",
    step: "The HR system follows the company’s configured approval workflow and notifies the approver via WhatsApp or email.",
    result: "The approver can review the request, and HR can track its status.",
  },
  {
    name: "Fleet",
    input: "A new rider is ready for onboarding and needs a vehicle.",
    step: "Review the rider’s documents, licence, and contract, then check available vehicles and equipment.",
    result: "Assign the rider to a project and record their vehicle and equipment allocation.",
  },
  {
    name: "Queues",
    input: "A visitor arrives for a booked service and needs a queue token.",
    step: "Check the booking window and slot capacity, then prioritize and route the token to the appropriate counter.",
    result: "Staff can monitor the queue, and the visitor hears a voice announcement when their token is called.",
  },
  {
    name: "Signwise",
    input: "A customer submits a request for a new signboard.",
    step: "Estimate the materials and cost, assign the work, and use Google Maps to plan the installation route.",
    result: "The installation team gets a scheduled job and a route to the customer site.",
  },
  {
    name: "Restaurant POS",
    input: "A customer orders a meal at the restaurant.",
    step: "Record the order at the point of sale and pass the items to the kitchen.",
    result: "The kitchen can prepare the order while staff track the sale and monitor inventory.",
  },
  {
    name: "Retail POS",
    input: "A customer takes products to the checkout counter.",
    step: "Record the purchase and adjust stock quantities for the items sold.",
    result: "The sale appears in the store’s reports, and staff can see the updated inventory.",
  },
  {
    name: "Wholesale POS",
    input: "A business customer asks whether a bulk quantity is available.",
    step: "Check the requested items against the wholesale inventory and record the enquiry.",
    result: "Staff can confirm stock availability and refer back to the customer’s enquiry.",
  },
];

export default function WorkflowPreview() {
  const [selected, setSelected] = useState(0);
  const workflow = workflows[selected];

  return (
    <section className="preview" aria-labelledby="workflow-title">
      <div className="preview-header">
        <h2 id="workflow-title">Workflow preview</h2>
        <span className="eyebrow">Illustrative</span>
      </div>
      <div className="preview-body">
        <div className="workflow-options" role="group" aria-label="Choose a workflow example">
          {workflows.map(({ name }, index) => (
            <button key={name} type="button" aria-pressed={selected === index} onClick={() => setSelected(index)}>{name}</button>
          ))}
        </div>
        <div aria-live="polite" aria-atomic="true" className="workflow">
          <div key={workflow.name} className="workflow-example">
            <div className="workflow-card"><span>Request</span><strong>{workflow.input}</strong></div>
            <p className="workflow-step">{workflow.step}</p>
            <div className="workflow-card workflow-result"><span>Outcome</span><strong>{workflow.result}</strong></div>
          </div>
        </div>
      </div>
    </section>
  );
}
