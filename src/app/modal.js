"use client"
import React, { useEffect } from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";

export default function CustomModal() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
    useEffect(()=>{
        onOpen();
    }, [])  
  return (
    <>
      <Button onPress={onOpen}>Open Modal</Button>
      <Modal 
        backdrop="opaque" 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        classNames={{
          backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20"
        }}
      >
        <ModalContent className="customcolor">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Warning Order</ModalHeader>
              <ModalBody>
                <p> 
                1. SITUATION: You are in danger of living a life so comfortable and soft
that you will die without ever realizing your true potential.
                </p>
                <p>
                2. MISSION: To unshackle your mind. Ditch the victim’s mentality forever.
Own all aspects of your life completely. Build an unbreakable foundation.
                </p>
                <p>
                3. EXECUTION:
If you do your job to the best of your ability, this will hurt. This
mission is not about making yourself feel better. This mission is about
being better and having a greater impact on the world.
Don’t stop when you are tired. Stop when you are done.
                </p>
                <p>
                4. CLASSIFIED: This is the origin story of a hero. The hero is you.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
