'use client';
import React, { useState } from 'react';
import styles from './CreateTicketForm.module.css';
import Image from "next/image";

export default function CreateTicketForm() {

  const [step, setStep] = useState<'customer' | 'hardware'>('customer');

  const handleNext = () => setStep('hardware');

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal} id="modalBox">
        {/* STEP 2: Customer Info */}
        {step === 'customer' && (
          <div className={styles.customerFormContainer}>
            <h2 className={styles.title}>Create Ticket</h2>

            <div className={styles.mainContainer}>
              {/* Steps Progress */}
              <div className={styles.container1}>
                <div className={styles.boxGroup}>
                  <div className={styles.stepGroup}>
                    <div className={styles.box1}>1</div>
                    <span className={styles.label}>Customer Info</span>
                  </div>
                  <div className={styles.line}></div>
                  <div className={styles.stepGroup}>
                    <div className={styles.box2}>2</div>
                    <span className={styles.label}>Repair Ticket</span>
                  </div>
                  <div className={styles.line}></div>
                  <div className={styles.stepGroup}>
                    <div className={styles.box3}>3</div>
                    <span className={styles.label}>Additional Info</span>
                  </div>
                </div>
              </div>

              {/* Title and description */}
              <div className={styles.sectionWrapper}>
                <div className={styles.container2}>
                  <div className={styles.sectionHeader}>
                    <h2>Customer Info</h2>
                    <p>Complete information related to the customer is required</p>
                  </div>
                </div>
              </div>

              {/* Form */}
              <form className={styles.inputContainer}>
                <div className={styles.inputRowBox}>
                  <div className={styles.inputFieldBox}>
                    <label className={styles.label}>Customer Email<span style={{ color: 'red' }}>*</span></label>
                    <input type="text" className={styles.inputField} placeholder="Enter email" />
                  </div>
                  <div className={styles.inputFieldBox}>
                    <label className={styles.label}>Customer Order<span style={{ color: 'red' }}>*</span></label>
                    <input type="text" className={styles.inputField} placeholder="Enter order" />
                  </div>
                </div>

                <div className={styles.inputRowBox}>
                  <div className={styles.inputFieldBox}>
                    <label className={styles.label}>First Name<span style={{ color: 'red' }}>*</span></label>
                    <input type="text" className={styles.inputField} placeholder="Enter first name" />
                  </div>
                  <div className={styles.inputFieldBox}>
                    <label className={styles.label}>Last Name<span style={{ color: 'red' }}>*</span></label>
                    <input type="text" className={styles.inputField} placeholder="Enter last name" />
                  </div>
                </div>

                <div className={styles.fullWidthRow}>
                  <label className={styles.label}>Customer Address<span style={{ color: 'red' }}>*</span></label>
                  <input type="text" className={styles.inputField} placeholder="Enter address" />
                </div>

                <div className={styles.inputRowBox}>
                  <div className={styles.inputFieldBox}>
                    <label className={styles.label}>Country<span style={{ color: 'red' }}>*</span></label>
                    <input type="text" className={styles.inputField} placeholder="Enter country" />
                  </div>
                  <div className={styles.inputFieldBox}>
                    <label className={styles.label}>State<span style={{ color: 'red' }}>*</span></label>
                    <input type="text" className={styles.inputField} placeholder="Enter state" />
                  </div>
                </div>

                <div className={styles.inputRowBox}>
                  <div className={styles.inputFieldBox}>
                    <label className={styles.label}>City<span style={{ color: 'red' }}>*</span></label>
                    <input type="text" className={styles.inputField} placeholder="Enter city" />
                  </div>
                  <div className={styles.inputFieldBox}>
                    <label className={styles.label}>ZIP Code<span style={{ color: 'red' }}>*</span></label>
                    <input type="text" className={styles.inputField} placeholder="Enter ZIP code" />
                  </div>
                </div>

                <div className={styles.fullWidthRow}>
                  <label className={styles.label}>Phone Number (optional)<span style={{ color: 'red' }}>*</span></label>
                  <input type="text" className={styles.inputField} placeholder="Enter phone number" />
                </div>

                <div className={styles.bottomRow}>
                  <p className={styles.bottomParagraph}>
                    <span style={{ color: 'red' }}>*</span> All fields are required
                  </p>
                  <button className={styles.nextButton} type="button" onClick={handleNext}>
                    Next <span className={styles.arrow}>&gt;</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {step === 'hardware' && (
          <div className={styles.hardwareModal}>
            <div className={styles.mainContainer2}>
              <h2 className={styles.title}>Create Ticket</h2>

              <div className={styles.hcontainer1}>
                <div className={styles.hboxGroup}>
                  <div className={styles.hstepGroup}>
                    <Image src="/tick.svg" alt="tick" width={24} height={24} />
                    <span className={styles.hlabel}>Step 1</span>
                  </div>
                  <div className={styles.hline}></div>
                  <div className={styles.hstepGroup}>
                    <div className={styles.hbox2}>2</div>
                    <span className={styles.hlabel}>Step 2</span>
                  </div>
                  <div className={styles.hline}></div>
                  <div className={styles.hstepGroup}>
                    <div className={styles.hbox3}>3</div>
                    <span className={styles.hlabel}>Step 3</span>
                  </div>
                </div>
              </div>

              <div className={styles.hcontainer2}>
                <div className={styles.htitle}>Hardware Info</div>
                <p className={styles.hardwareText}>
                  Complete information related to the repairing of the hardware.
                </p>
              </div>

              <div style={{ height: '15px' }} />

              <div className={styles.hcontainer3}>
                <div className={styles.labelRow}>
                  <h2 className={styles.heading}>
                    Select hardware<span className={styles.required}>*</span>
                  </h2>
                </div>
                <div style={{ height: '5px' }} />
                <input
                  type="text"
                  placeholder="Starlight - 12 Persons"
                  className={styles.hardwareInput}
                />
                  <div className={styles.labelRow}>
                  <h2 className={styles.heading}>
                   Customer Claimed Issue<span className={styles.required}>*</span>
                  </h2>
                </div>

                  <div style={{ height: '5px' }} />
                <input
                  type="text"
                  placeholder="Describe Issue"
                  className={styles.inputissue}
                />

              <div className={styles.labelRow}>
  <h2 className={styles.heading}>
    Is warranty still active?
  </h2>
</div>

<div className="radioRow">
  <label className="radioOption">
    <input type="radio" name="warranty" value="yes" className="radioCircle" />
    <span className="radioLabel">Yes</span>
  </label>

  <label className="radioOption">
    <input type="radio" name="warranty" value="no" className="radioCircle" />
    <span className="radioLabel">No</span>
  </label>
</div>

           <div className={styles.labelRow}>
  <h2 className={styles.heading}>
Expiration Date <span className={styles.required}>*</span>
  </h2>
</div>
    <div style={{ height: '5px' }} />
 <input
                  type="text"
                  placeholder="Enter warranty expiration date"
                  className={styles.inputwarranty}
                />

              </div>
                <div className={styles.bottomRow}>
                  <p className={styles.bottomParagraph}>
                    <span style={{ color: 'red' }}>*</span> All fields are required
                  </p>
                  <button className={styles.nextButton} type="button" onClick={handleNext}>
                    Next <span className={styles.arrow}>&gt;</span>
                  </button>
                </div>
            </div>
          
          </div>
          
        )} 



      </div>
    </div>
  );
}




 